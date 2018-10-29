import http from "./httpService";

export function getEduInfo() {
  return http.get("/eduInfo");
}
