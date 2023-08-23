## ✏️ FAV

효율적인 인력 분배 및 친환경 조성을 위한 대규모 농장 모니터링 시스템 FAV입니다. 

---

### 개요

🕑 기간

- 23.07.19~08.23

⚙️ 개발 환경

- ![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=flat&logo=spring-boot) ![React](https://img.shields.io/badge/React-40AEF0?style=flat&logo=react)
- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=white)



👨‍👧‍👦 팀원

- 프론트엔드 - 정유진 [https://github.com/jadewisemann](https://github.com/jadewisemann)
- 백엔드 - 박하운 [https://github.com/poow810](https://github.com/poow810)
- Sensor & AI - 이현서 [https://github.com/Hyeonseo-Lee](https://github.com/Hyeonseo-Lee)


### ⭐ 프로젝트 소개

대규모 데이터 처리를 통한 사용자가 대규모 농장의 정보를 한 눈에 알아볼 수 있는 모니터링 시스템을 개발하고자 시작하게 된 프로젝트입니다.

- 농산물에 대해 소비자와 생산자 모두에게 서비스를 제공하는 것을 목표로 합니다.
- 기기와 서버 간 다대일 통신을 통해 대규모 데이터 처리를 목표로 하고 있습니다.
- 생산자는 해당 농장의 환경(온도, 조도 및 습도 등)에 대한 데이터를 표, 그래프 형태로 전달 받을 수 있습니다.
- 소비자에게도 생산자의 농장 정보를 제공하여 소비자-생산자 간 정보 불균형 문제를 해결하고자 합니다.
- 소비자는 QR측정을 통해 해당 상품의 생육 일기 및 해당 농장의 정보를 알 수 있습니다.(개발 중)
- YOLO V5 이미지 인식 모델을 학습시켜, 위에 내려다본 사진에서 잡초를 인식 할 수 있는 모델을 구성하였습니다.
- AI 서버를 만들어서 받아온 이미지에서 잡초가 있는 부분을 인식해서 사용자에게 다시 전할 수 있습니다. (개발 중)

### ✔️ 주요 기능


=======
| 홈 화면 | 회원 가입 | 로그인 |
| --- | --- | --- |
| <img src="https://github.com/jadewisemann/Smart_Farm_Monitoring_System/assets/111109429/5513bb9a-53bf-4c46-81a8-442bc24a8b51"/> | <img src="https://github.com/jadewisemann/Smart_Farm_Monitoring_System/assets/111109429/53451a4e-2b19-48d0-877a-d48db3fdb0e2"/> | <img src="https://github.com/jadewisemann/Smart_Farm_Monitoring_System/assets/111109429/365360d9-c923-4276-aa51-af1ff55d9972"/> |
| FAV 홈 화면 | 회원 가입 기능 | 로그인 기능 |

| 메인 화면 | 기기 추가 | 농장 변경 |
| --- | --- | --- |
| <img src="https://github.com/jadewisemann/Smart_Farm_Monitoring_System/assets/111109429/fd5faae8-36d5-401d-b175-2dcd21c7823c"/> | <img src="https://github.com/jadewisemann/Smart_Farm_Monitoring_System/assets/111109429/2bac3233-0857-480c-b62f-e18a95849c0b"/> | <img src="https://github.com/jadewisemann/Smart_Farm_Monitoring_System/assets/111109429/dae619fd-c50b-4e78-a5f3-f0c66d8cb2a7"/> |
| 농장 모니터링 화면 | 데이터를 수집할 기기 추가 | 기기의 농장 속성 변경 |

---

### 🗂️ 프로젝트 구조

<img src="https://github.com/jadewisemann/Smart_Farm_Monitoring_System/assets/111109429/75f2c320-81c4-4d33-87f8-8889a40491c3"/>

---

### YOLOV5 잡초 탐지 모델 학습 결과
| Train | Prediction | Label |
| --- | --- | --- |
| ![train_batch1](https://github.com/Hyeonseo-Lee/colabtestcommit/assets/87067373/1439be2b-f56e-458e-971b-6f83290dc531) | ![val_batch1_pred](https://github.com/Hyeonseo-Lee/colabtestcommit/assets/87067373/978cc9bb-48db-4135-94bf-285d3e5ff3f0) | ![val_batch1_labels](https://github.com/Hyeonseo-Lee/colabtestcommit/assets/87067373/22450276-c7e4-4c10-8240-37ea598d8467) |


| F1-Curve | P-Curve |
| --- | --- | 
| ![F1_curve](https://github.com/Hyeonseo-Lee/colabtestcommit/assets/87067373/b9f76a13-ef92-4fa8-af83-18c94b540144) | ![P_curve](https://github.com/Hyeonseo-Lee/colabtestcommit/assets/87067373/5969bda1-cc38-4f9d-9cc0-b1208a4c7f6c) |


| R-Curve | PR-Curve |
| --- | --- |
| ![R_curve](https://github.com/Hyeonseo-Lee/colabtestcommit/assets/87067373/9ae5af20-0e95-4911-8212-75e53bd7acff) |   ![PR_curve](https://github.com/Hyeonseo-Lee/colabtestcommit/assets/87067373/f0695d20-cce4-4584-9be1-9141da4a4552) |


| Result |
| --- |
| ![results](https://github.com/Hyeonseo-Lee/colabtestcommit/assets/87067373/6ce414cb-2454-4a00-bdf6-6c4423bdbec8) |


---

### ✏️ 향후 계획

- 수집한 데이터를 바탕으로 소비자에게 전달하기 위한 데이터 가공 및 표현하기 위한 SSG 구성

- 패키징 QR을 추가하여 소비자의 접근성 향상

- 소비자에게 해당 상품의 생육 일기를 제공

- AI 서버를 만들고 센서가 찍어온 사진에 잡초가 있는 부분을 표시하여 잡초 관리 비용을 줄일 수 있는 방법을 제공
  
| 메인 화면 | 판매자 정보 화면 | 상품 정보 |
| --- | --- | --- |
| <img src=https://github.com/jadewisemann/Smart_Farm_Monitoring_System/assets/111109429/cd67407e-9e43-43b1-a2fb-9a8b4ef8dd9c/> | <img src=https://github.com/jadewisemann/Smart_Farm_Monitoring_System/assets/111109429/1ea8235e-f323-4070-8e26-207d0cb75a31/> | <img src=https://github.com/jadewisemann/Smart_Farm_Monitoring_System/assets/111109429/ea148398-527b-43fa-badd-d863b0bd25fd/> |
| FAV 홈 화면 | 생산자의 정보 제공 | 상품 가치 제공 |

| 온도 | 조도 | 습도 |
| --- | --- | --- |
| <img src=https://github.com/jadewisemann/Smart_Farm_Monitoring_System/assets/111109429/356ed655-4b8b-4db9-af04-db2a719f41d8/> | <img src=https://github.com/jadewisemann/Smart_Farm_Monitoring_System/assets/111109429/9c2ff9e6-40d9-463f-afd3-ed69c0130f08/> | <img src=https://github.com/jadewisemann/Smart_Farm_Monitoring_System/assets/111109429/85d8de08-00e3-43ef-a2f3-9e6c38ce1a88/> |
| 온도 정보 제공 | 조도 정보 제공 | 습도 정보 제공 |

---

### 📌 참고

프론트 엔드

- https://github.com/jadewisemann/Smart_Farm_Monitoring_System/wiki/Front-end

백엔드

- https://github.com/jadewisemann/Smart_Farm_Monitoring_System/wiki/Back-end

Sensor 및 AI

- https://github.com/jadewisemann/Smart_Farm_Monitoring_System/wiki/AI-%26-Sensor

