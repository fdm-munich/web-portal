import { ContactInfo } from "@/components/contact-info";
import { ContactUs } from "@/components/contact-us";
import { Membership } from "@/components/membership";
import { NextEvent } from "@/components/next-event";

export function Dashboard() {
  return (
    <div className="grid gap-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="w-full sm:w-1/2">
          <NextEvent />
        </div>
        <div className="w-full sm:w-1/2">
          <ContactInfo />
        </div>
      </div>
      <div>
        <Membership />
      </div>
    </div>
  );
}
