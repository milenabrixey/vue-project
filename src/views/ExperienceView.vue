<template>
  <div class="experience">
    <br />
    <div class="join join-vertical w-full">
      <div class="collapse collapse-arrow join-item border-base-300 border glass">
        <input type="radio" name="accordion" checked />
        <div class="collapse-title text-xl font-medium">
          <div class="grid grid-cols-2 grid-flow-col gap-4">
            <p>Miami University</p>
            <span class="italic justify-end">Aug 2017 - Dec 2021</span>
          </div>
        </div>
        <div class="collapse-content">
          <p>
            I graduated from Miami University with a Bachelor of Science in Computer Engineering and
            a minor in Computer Science, with a focus on mathematics. My studies encompassed
            hardware, software programming, networking, and algorithms. This provided me with a
            strong foundation in computer architecture, circuit design, and microcontrollers, as
            well as embedded systems and FPGA programming. I also gained expertise in operating
            systems and hardware-software integration.
          </p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border-base-300 border glass">
        <input type="radio" name="accordion" />
        <div class="collapse-title text-xl font-medium">
          <div class="grid grid-cols-2 grid-flow-col gap-4">
            <p>The McAlear Group</p>
            <span class="italic justify-end">Jan 2022 - Present</span>
          </div>
        </div>
        <div class="collapse-content">
          <p>
            I have gained extensive professional experience in IT, where I have developed and
            applied skills in frontend development, backend development, and database management. My
            responsibilities have included resolving Help Desk tickets, managing and developing
            projects such as web applications and APIs, as well as collaborating with
            cross-functional teams to achieve organizational goals. Through these experiences, I
            have demonstrated strong problem-solving, communication, adaptability, and a commitment
            to delivering high-quality results.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Media query for desktop screens */
@media (min-width: 1024px) {
  .experience {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

/* Media query for smaller screens */
@media (max-width: 1024px) {
  .experience {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
