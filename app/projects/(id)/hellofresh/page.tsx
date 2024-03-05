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
                HelloFresh / Green Chef
              </h1>
            </header>
            <div className="flex justify-between space-x-2 border-b border-white mb-4">
              <figure className=" w-1/2">
                <img
                  className="w-full max-w-xl mx-auto mb-6 rounded-lg sm:mb-8"
                  src="/HelloFresh-logo.png"
                  alt=""
                />
              </figure>
              <figure className=" w-1/2">
                <img
                  className="w-full w-full max-w-xl mx-auto mb-6 rounded-lg sm:mb-8"
                  src="/green-chef.jpg"
                  alt=""
                />
              </figure>
            </div>
            <h2 className="text-2xl font-bold mb-4">A big hill to climb...</h2>

            <p className="lead mb-4">
              I joined the HelloFresh team in 2018, just after the acquisition
              of Green Chef. Green Chef is an Organic focused meal kit delivery
              service, and was the first to offer a Keto meal plan.
            </p>
            <p className="mb-8">
              Initially hired as a Staff Engineer, my primary responsibility was
              to stabilize the Green Chef platform. The technology inherited was
              a NodeJS monolithic API that handled various tasks such as order
              processing, user and subscription management, product forecasting,
              and fulfillment planning. The platform was in a state of
              disrepair, requiring manual intervention, particularly in the
              areas of order processing and shipment fulfillment. The API was
              complemented by an Angular 1.x front-end application, which
              suffered from elusive bugs and lacked observability at that time.
              This is not uncommon in a startup environment and something I
              could have been guilty of myself in the past had I not stayed
              around long enough to see my past products mature. It is important
              to view these challenges as opportunities to learn and grow and
              approach them with an understanding that there is always a reason
              for the way things are the way they are.
            </p>
            <h2 className="text-2xl font-bold mb-4">
              Fighting the scariest dragon first...
            </h2>
            <p className="mb-8">
              The first aspect tackled was the order processing system. The
              existing codebase was convoluted, with business logic scattered
              across multiple files. To address this, I created a process map to
              gain a clearer understanding of the order flow. Next, I embarked
              on refactoring the code to enhance readability and eliminate the
              common errors and need for manual intervention. I implemented
              logging and monitoring mechanisms to enhance observability. In the
              end, this endeavor proved successful, as the process soon operated
              smoothly and I was confident my focus could shift to the next
              challenge. During this refactor, I introduced a new worker process
              utilizing BullMQ. The integration of a comprehensive job queue
              greatly improved our ability to manage order processing and
              fulfillment and in the future would prove to be a valuable tool in
              our team&apos;s toolkit.
            </p>
            <h2 className="text-2xl font-bold mb-4">
              Pull the weed in front of you...
            </h2>
            <p className="mb-8">
              During my early days with the Green Chef team, we encountered
              numerous challenges while operating with a small team.
              Prioritizing tasks was often a complex decision. My strategy
              involved prioritizing issues that directly impacted customers or
              caused significant difficulties for the team. This led us to focus
              on improving test coverage and enhancing monitoring and
              observability. Implementing these improvements instilled
              confidence within the team, enabling us to make changes to the
              platform and introduce new features more comfortably.
              Additionally, we initiated efforts to tackle the technical debt
              that had accumulated over time. This involved removing outdated
              code and replacing it with newer, more maintainable alternatives.
            </p>
            <h2 className="text-2xl font-bold mb-4">
              A roadmap and a full tank of gas...
            </h2>
            <p className="mb-8">
              The team at our Boulder office experienced rapid growth, expanding
              from 10 to 20 and then to 30 engineers, QA engineers, and product
              managers. This growth enabled us to stabilize the platform and
              embark on adding new features and functionalities. Subsequently, I
              was promoted to Director of Engineering, overseeing teams in
              DevOps, Platform, SRE, Core API, and Internal Applications. Over
              the following year, we undertook numerous exciting projects. We
              established a standardized set of platform tools to facilitate the
              development and deployment of services extracted from the
              monolithic architecture. We implemented a new fulfillment and
              shipping system using a strategy pattern to accommodate multiple
              shipping label providers. We replaced the outdated Angular 1.x
              front-end with a modern React front-end powered by Next.js,
              significantly enhancing performance and compliance compared to
              other HF brand applications. We developed new forecasting models,
              implemented features to offer our users greater flexibility in
              product selection and quantity, and streamlined the signup
              process. These changes improved our AOV and increased our active
              user base by 5x.
            </p>
            <h2 className="text-2xl font-bold mb-4">A global perspective...</h2>
            <p className="mb-8">
              In the last year of my time at HelloFresh I was able to focus on
              more global architecture problems. Partnering with engineers from
              NYC, Berlin, Tornto, and Sydney, we sought solutions that could be
              applied accross all company brands. I worked on a global
              authentication and user management solution, brought the learnings
              from the Green Chef shipping and fulfillment platform to other
              teams, and found ways to unify the menu management service to
              support a white-label mobile and front-end application being
              developed by our Canada team. I left HelloFresh in 2021. I had
              accomplished what I had set out to do and was ready for a new
              challenge. I am proud of the work that I did and the team that I
              built. I&apos;m even more proud to see the team I mentored go on
              to do great things of their own design and make impacts at
              HelloFresh and other companies around the world.
            </p>
            <h2 className="text-2xl font-bold mb-4">Technologies</h2>
            <div className="flex flex-wrap justify-start gap-x-4">
              <span className="text-xl font-bold">NextJS</span>
              <span>React</span>
              <span>NodeJS</span>
              <span className="text-xl font-bold">Typescript</span>
              <span>Express</span>
              <span>Golang</span>
              <span className="text-xl font-bold">Postgres</span>
              <span>MongoDB</span>
              <span className="text-xl font-bold">AWS</span>
              <span>RabbitMQ</span>
              <span>Redis</span>
              <span>CircleCI</span>
              <span className="text-xl font-bold"> Teraform</span>
              <span>Redshift</span>
              <span>Python</span>
            </div>
          </article>
        </div>
      </main>
    </Fragment>
  );
}
