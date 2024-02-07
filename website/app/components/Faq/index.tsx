import { Link } from "@remix-run/react";

function Faq() {
  return (
    <div className="grid md:h-screen place-content-center p-3">
      <div className="max-w-screen-md m-auto">
        <h2
          id="title-faq"
          className="text-2xl md:text-5xl gap-2 font-semibold text-gray-200 flex justify-center items-center"
        >
          FAQ{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25.67976"
            height="50.45487"
            className="fill-current"
            viewBox="0 0 25.67976 50.45487"
          >
            <path
              d="M4.68693,9.66747c3.08091-5.16971,10.85858-6.52926,14.61671-1.24359,1.69718,2.38702,1.87753,5.75594,.37486,8.28121-.8344,1.40222-2.15318,2.45045-3.33775,3.54408-1.31821,1.21702-2.58213,2.54746-3.43763,4.14014-2.01182,3.74538-2.01362,8.09135-1.85145,12.22747,.12574,3.2069,5.12637,3.22309,5,0-.14015-3.57442-.43244-7.82662,1.88061-10.84131,1.25213-1.63195,3.01218-2.81829,4.38943-4.33737,1.40097-1.54524,2.46783-3.34948,2.97469-5.38491,1.01423-4.0729-.01166-8.37496-2.74906-11.54442C19.91777,1.46419,15.60789-.29805,11.59907,.04161,6.9229,.4378,2.76566,3.12328,.36957,7.14387c-1.65122,2.77071,2.66977,5.28821,4.31735,2.5236h0Z"
              origin="undraw"
            />
            <path d="M15.38521,45.54231l-.56034-.12494c-.3323-.10419-.6646-.11907-.9969-.04465-.33271,.01509-.64254,.11398-.9295,.29667-.29134,.1571-.52515,.37173-.70142,.64389-.22097,.24146-.37013,.52485-.44748,.85018l-.0893,.6646c.0014,.45127,.11518,.87187,.34132,1.2618l.39091,.50597c.31193,.30984,.67966,.52415,1.10317,.64293l.56034,.12494c.3323,.10419,.6646,.11907,.9969,.04465,.33271-.01509,.64254-.11398,.9295-.29667,.29134-.1571,.52515-.37173,.70142-.64389,.22097-.24146,.37013-.52485,.44748-.85018l.0893-.6646c-.0014-.45127-.11518-.87187-.34132-1.2618l-.39091-.50597c-.31193-.30984-.67966-.52415-1.10317-.64293h0Z" />
          </svg>
        </h2>
        <p
          id="description-faq"
          className="text-center max-w-screen-sm m-auto mt-4"
        >
          These are frequently asked questions that we have collected, if you
          have any suggestions send an issue on{" "}
          <Link
            to="https://github.com/nelsondev19/countries.dev"
            className="hover:underline hover:text-gray-100 duration-300"
          >
            GitHub
          </Link>
          .
        </p>
        <div className="mt-4 max-w-screen-sm m-auto">
          {faqs.map(({ id, question, answer }) => {
            return (
              <div key={id} className="w-full md:px-4 py-2">
                <details className="mb-4">
                  <summary className="font-semibold text-lg cursor-pointer border border-gray-700 hover:border-gray-600 duration-300 rounded-md py-2 px-4 mb-3">
                    {question}
                  </summary>
                  <div dangerouslySetInnerHTML={{ __html: answer }} />
                </details>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Faq;

export const faqs = [
  {
    id: 1,
    question: "Can I use the API in my project?",
    answer: `Yes, you can use! API scales to millions of users worldwide.`,
  },
  {
    id: 2,
    question: "Does the API have a REST type API?",
    answer: `Currently no, only the GraphQL API exists but in the future it may be available.`,
  },
  {
    id: 3,
    question: "Who is the creator of this project?",
    answer: `The creator is <a href="https://github.com/nelsondev19" class="hover:underline hover:text-gray-100 duration-300">Nelson Hernández</a>, he is a Frontend Developer and DevOps from El Salvador 🇸🇻, he created this project with a lot of love for everyone.`,
  },
];
