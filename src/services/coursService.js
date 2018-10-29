import http from "./httpService";

export function getCoursInfo() {
  return http.get("/courInfo");
}
