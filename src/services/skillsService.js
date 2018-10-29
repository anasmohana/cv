import http from "./httpService";

export function getSkilInfo() {
  return http.get("/skilInfo");
}
