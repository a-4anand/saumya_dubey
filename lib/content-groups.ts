import { services } from "@/data/site-config";

export const groupedServices = Object.entries(
  services.reduce<Record<string, typeof services>>((groups, service) => {
    const bucket = groups[service.category] ?? [];
    bucket.push(service);
    groups[service.category] = bucket;
    return groups;
  }, {}),
);
