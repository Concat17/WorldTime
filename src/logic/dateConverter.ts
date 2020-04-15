import { DateTime } from "luxon";
import * as zones from "../../store/iana.json";

export function convertDate(location: string): DateTime {
  const zone = zones[location];
  if (zone === "local") {
    return DateTime.local();
  }
  return DateTime.local().setZone(zone);
}
// if (location === "Tokyo") {
//   return DateTime.local().setZone("Asia/Tokyo");
// } else if (location === "Paris") {
//   return DateTime.local().setZone("Europe/Paris");
// }
