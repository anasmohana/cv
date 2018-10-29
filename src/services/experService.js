import http from "./httpService";

export function getExpInfo() {
  return http.get("/expInfo");
}
