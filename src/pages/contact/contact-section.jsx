import { contactInfo } from "./constants";
import { PhoneIcon } from "./icons/phone";

export function ContactSection({ loadData }) {
  return (
    <div className="flex justify-between gap-8">
      <TypesContact loadData={loadData}></TypesContact>
      <FormSendMessage></FormSendMessage>
    </div>
  );
}

function FormSendMessage(){


    return(
        <form className="px-8 py-10 shadow-xl flex-grow flex flex-col justify-between">
            <div className="flex gap-4 w-full justify-between">
                <input name="name" className="flex-grow bg-[#F5F5F5] p-4" placeholder="Your Name" required></input>
                <input name="email" className="flex-grow bg-[#F5F5F5] p-4" placeholder="Your Email" required></input>
                <input name="phone" className="flex-grow bg-[#F5F5F5] p-4" placeholder="Your Phone" required></input>
            </div>
            <textarea className="bg-[#F5F5F5] max-h-[210px] w-full p-4 resize-none" name="message" placeholder="Your Massage"></textarea>
            <div className="flex justify-end">
                <button type="submit" className="px-12 py-4 cursor-pointer bg-[#DB4444] text-white rounded-[4px]">Send Massage</button>
            </div>
        </form>
    )

}

function TypesContact({loadData}) {
  return (
    <div className="shadow-xl max-w-[340px] py-10 px-9">
      {contactInfo.map((value, index) => {
        return (
          <div key={index}>
            <div className="flex flex-col gap-8">
              <div className="flex items-center justify-start gap-4">
                <PhoneIcon></PhoneIcon>
                <p className="font-medium">{value.title}</p>
              </div>
              <div className="flex flex-col gap-4">
                <p>{value.text}</p>
                {loadData["contacts"].map((typeValue) => {
                  return (
                    <p key={typeValue.id}>{`${
                      value.type.charAt(0).toUpperCase() + value.type.slice(1)
                    }: ${typeValue[value.type]}`}</p>
                  );
                })}
              </div>
            </div>
            {index != contactInfo.length - 1 && (
              <div className="mt-8 mb-8 w-full h-[1px] bg-black"></div>
            )}
          </div>
        );
      })}
    </div>
  );
}
