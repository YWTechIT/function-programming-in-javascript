class Empty {
  map(f) {
    return this; // 글자 그대로 빈(empty), 쓸모없음(nothing)을 의미합니다.
  }

  // fmap :: (A -> B) -> Wrapper[A] -> Wrapper[B]
  fmap(_) {
    return new Empty();
  }

  toString() {
    return "Empty()"; // 마찬가지로 어떤 함수를 Empty에 매핑해도 할 일이 없습니다.
  }
}
