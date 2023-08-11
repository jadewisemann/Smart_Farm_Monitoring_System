const val = (status) => {
  return (
    status == 200
    ? '정상' 
    : status == 409
      ? '중복'
      : status == 403
        ? '403 에러'
          : {}
  )
}

console.log(val(403))