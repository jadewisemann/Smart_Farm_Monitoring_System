package com.be.spring.management.controller;


import com.be.spring.management.dto.AddUserRequest;
import com.be.spring.management.dto.JwtToken;
import com.be.spring.management.dto.MailRequest;
import com.be.spring.management.service.MailService;
import com.be.spring.management.service.RefreshTokenService;
import com.be.spring.management.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;

import java.util.HashMap;
import java.util.Map;

@RequiredArgsConstructor
@RestController
@RequestMapping("/members")
public class MemberController {

    private final UserService userService;
    private final MailService mailService;
    private final RefreshTokenService refreshTokenService;

    // 회원 가입 기능
    @PostMapping("/signup")
    public RedirectView signup(@RequestBody AddUserRequest request) {
        userService.save(request);
        return new RedirectView("login");
    }

    // 회원 가입 시 중복 검사
    @GetMapping("/signup/{userId}/exists")
    public ResponseEntity<Boolean> checkUserIdDuplicate(@PathVariable String userId) {
        return ResponseEntity.ok(userService.checkIdDuplicate(userId));
    }

    // 로그인 기능
    @PostMapping("/login")
    public JwtToken login(@RequestBody AddUserRequest request) {
        String userId = request.getUserId();
        String password = request.getPassword();
        return userService.login(userId, password);
    }

    // 아이디 찾기 기능
    @PostMapping("/findId")
    public ResponseEntity<String> findUserId(@RequestBody MailRequest request) {
        String userId = userService.getUserIdByEmail(request.getEmail());

        if(userId != null) {
            mailService.sendUserIdToEmail(request.getEmail(), userId);
            return ResponseEntity.ok("메일이 성공적으로 발송되었습니다.");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("이메일에 해당하는 아이디가 존재하지 않습니다.");
        }
    }

    // 비밀번호 재설정 기능
    @GetMapping("/check/findPw")
    public @ResponseBody Map<String, Boolean> checkEmailId(String email, String userId) {
        Map<String, Boolean> json = new HashMap<>();
        boolean pwFindCheck = userService.userEmailCheck(email, userId);
        json.put("check", pwFindCheck);
        return json;
    }

    @PostMapping("/findPw")
    public ResponseEntity<String> findPassword(@RequestBody MailRequest request) {
        // userEmailCheck 함수에서 해당 이메일과 아이디의 사용자가 있는지 확인합니다.
        boolean exists = userService.userEmailCheck(request.getEmail(), request.getUserId());

        if (!exists) {
            // 해당 사용자가 없으면 에러 메시지를 반환합니다.
            return ResponseEntity.badRequest().body("해당 이메일과 아이디로 등록된 사용자가 없습니다.");
        }

        // 임시 비밀번호를 생성하고 이메일로 발송합니다.
        String tempPassword = mailService.sendPasswordToEmail(request.getEmail());

        // 임시 비밀번호로 사용자의 비밀번호를 업데이트합니다.
        userService.updatePassword(tempPassword, request.getUserId());

        return ResponseEntity.ok("임시 비밀번호가 이메일로 발송되었습니다. 로그인 후 비밀번호를 변경해주세요.");
    }

}