import http from "./httpService";

export function getPerInfo() {
  return http.get("/perInfo");
}
