import BackToButton from "@/app/ui/back-tobutton";
import { Fragment } from "react";
export default function Page() {
  return (
    <Fragment>
      <BackToButton href="/projects" title="Projects" />
      <main className="max-w-2xl mx-auto text-lg">
        <div className="flex flex-col my-16">
          <article className="">
            <header className="">
              <h1 className="mb-6 text-4xl font-extrabold leading-tight lg:mb-6 lg:text-4xl ">
                RedJade Sensory Software
              </h1>
            </header>
            <div className="border-b border-white mb-4">
              <figure>
                <img
                  className="w-full w-full max-w-sm mx-auto mb-6 rounded-lg sm:mb-8"
                  src="/redjade.jpg"
                  alt=""
                />
              </figure>
            </div>
            <h2 className="text-2xl font-bold mb-4">
              Unexpected opportunities...
            </h2>

            <p className="lead mb-8">
              In late 2013 I met two individuals who owned a sensory testing
              company with a few physical testing locations in the U.S. They had
              a vision for a software platform that would allow them to manage
              their sensory tests and data more effectively. They believed their
              current business model could be replaced with a software solution
              that their clients could operate themselves. This was an
              opportunity to build something brand new, from the ground up, with
              the freedom to make all the technical decisions. I didn&apos;t
              need any more convincing.
            </p>
            <h2 className="text-2xl font-bold mb-4">
              Start small and get to market...
            </h2>
            <p className="mb-8">
              Our first product was an analysis tool that took an Excel file of
              data, computed common statistical analysis, as well as QDA and
              PCA, and then generated a PDF export. It also provided a beautiful
              UI to explore the analysis and run variations by excluding
              subjects or products. This tool was used by the sensory
              professionals to analyze their data and generate reports for their
              clients. It was a product with limited capabilities but we were
              able to get it to customers and begin generating revenue. This
              revenue proved there was a market for our software and allowed us
              to start building the platform that we had envisioned.
            </p>
            <h2 className="text-2xl font-bold mb-4">
              Get feedback you trust and iterate...
            </h2>
            <p className="mb-8">
              Fortunately for us, we were able to get our product into the hands
              of some of the most prominent companies in the food and beverage
              industry. This allowed us to get feedback from very experienced
              and knowledgeable sensory professionals. With this feedback, we
              were able to iterate on our analysis tool and form a plan for
              future product offerings.
            </p>
            <h2 className="text-2xl font-bold mb-4">
              Jumping all the way in...
            </h2>
            <p className="mb-8">
              With the analysis tool proving to be a success, we began to tackle
              the data collection side of the sensory testing business. The next
              product included a survey authoring tool. This supported multiple
              languages, custom logic and branching, and a variety of question
              types. This application was paired with a survey collection tool
              that supported in-person, online, and mobile data collection. A
              separate application was built for labs and kitchens to manage the
              delivery of samples and the collection of data with precisely
              timed prompting to ensure accurate results. Lastly, we built a
              project management tool where customers would define their tests,
              products, subjects, and surveys. This tool would guide the user
              through the process of setting up a project and then provide a
              dashboard to monitor the progress and results of the test.
            </p>
            <h2 className="text-2xl font-bold mb-4">
              A suprise winner and interested buyers...
            </h2>
            <p className="mb-4">
              A product that may not have been critical to our vision, but was a
              definite enhancement was a recruiting tool. These tests require
              anywhere from 12 to 200 participants to gather results. With the
              ability to leverage the survey authoring and collection tool we
              had already built, we implemented a recruiting tool that had more
              of a general application. It allowed the user to define
              demographic quotas and then author surveys to fit respondents into
              those quotas. It allowed the communication of email blasts and
              guided the user through follow-up phone calls with predefined
              conversation scripts. It integrated the demographics into the test
              data and allowed our clients to slice their test results in ways
              they had never been able to before. This tool was a surprise
              winner and it was the tool that caught the eye of a few interested
              buyers.
            </p>
            <p className="mb-8">
              In 2018 after entertaining offers for all or parts of the company
              we decided to sell. We sold to a company that was a leader in the
              sensory industry and had a vision for the future of sensory
              testing. We had acquired clients from the largest food, beverage,
              and CPG companies. We saw new products tested on our platform and
              released to the market. We had provided academia with a free tool
              for their food science curriculum. Finally, after many years of
              high excitement and high stress, I took a much-needed break from
              software development before deciding on my next chapter.
            </p>
            <h2 className="text-2xl font-bold mb-4">Technologies</h2>
            <div className="flex flex-wrap justify-start gap-x-4">
              <span className="text-xl font-bold">Angular</span>
              <span>Javascript</span>
              <span className="text-xl font-bold">Ruby on Rails</span>
              <span>Postgres</span>
              <span className="text-xl font-bold">AWS</span>
              <span>RabbitMQ</span>
              <span>Redis</span>
              <span className="text-xl font-bold">R</span>
              <span>D3</span>
              <span> Ansible</span>
            </div>
          </article>
        </div>
      </main>
    </Fragment>
  );
}
