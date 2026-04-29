import FadeIn from "./FadeIn"
import SectionHeading from "./SectionHeading"

const AboutMe = () => {
  return (
    <section id="about-me" className="py-5 px-6 max-w-2xl mx-auto ">
      <FadeIn>
        <SectionHeading>Things About Me</SectionHeading>
      </FadeIn>
      
      <div className="space-y-4 text-base text-muted-foreground">
        <FadeIn>
          <h2 className="text-base">I believe quality work is equal parts systems thinking and human empathy.</h2>
        </FadeIn>
        
        <FadeIn>
          <p>I grew through projects where requirements shifted, business rules overlapped, and quality had to hold regardless. That taught me to think in flows, not isolated test cases.</p>
        </FadeIn>
      
        <FadeIn>
          <p>I built automation foundations in the pre-AI era: frameworks, selectors, data setups, and failure analysis by hand. Today I use AI to accelerate iteration and reduce repetitive effort, while keeping core engineering judgment at the center of every decision.</p>
        </FadeIn>

        <FadeIn>
          <p>Outside delivery cycles, I study open-source projects to absorb design decisions and coding conventions from teams shipping at scale.</p>
        </FadeIn>
      </div>
    </section>
  )
}

export default AboutMe;