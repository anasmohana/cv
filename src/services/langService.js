import http from "./httpService";

export function getlangInfo() {
  return http.get("/langInfo");
}
