import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("translate-x-20");
        } else {
          entry.target.classList.remove("translate-x-20");
        }
      });
    });

    const hideElements = document.querySelectorAll(".translate-x-0");
    hideElements.forEach((element) => observer.observe(element));

    // Cleanup the observer on component unmount
    return () => {
      hideElements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam reiciendis obcaecati dolorem magnam. Cumque alias aspernatur explicabo. Omnis, ex animi pariatur placeat eius repellendus molestiae dolorum, deleniti ipsam sed quam distinctio illo fuga nobis. Consequuntur iusto eaque delectus illum dolor deleniti perferendis quis, consequatur hic vero id quo assumenda nostrum ipsum repellendus rem, fuga minus eligendi rerum quas soluta. Quas doloribus sunt eos cum molestiae a rerum cumque qui magnam rem nulla distinctio vitae minus aut sint dicta voluptas illo, autem laboriosam corrupti facilis. Consequatur, itaque laboriosam natus explicabo quos, officia doloribus mollitia id illo maxime deleniti amet ut. Consequatur vel non numquam eveniet odit perspiciatis corrupti dolore, laudantium quod itaque molestiae cupiditate tempora modi officiis mollitia natus repudiandae similique a harum reprehenderit vitae distinctio fugit? Eos perferendis ex recusandae, doloremque atque consectetur autem? Expedita, placeat. Dolore possimus corporis quasi ut, harum voluptatem neque? Molestias vel sed nostrum aliquid eos. Quam explicabo velit eos optio molestiae quidem harum nobis excepturi quo quaerat neque asperiores voluptatem, aut consequuntur ullam obcaecati accusantium dignissimos temporibus cum itaque? Eum, numquam. Quidem accusantium est dolores iste, iusto non eaque id sequi ab ut distinctio ullam velit doloribus veniam a molestiae cupiditate asperiores aut harum modi.
      </p>
      <h1 className="text-5xl m-20 text-red-400 transition-all duration-500 translate-x-0">hareem</h1>
      <h1 className="text-5xl m-20 text-red-400 transition-all duration-500 translate-x-0">hareem</h1>
      <h1 className="text-5xl m-20 text-red-400 transition-all duration-500 translate-x-0">hareem</h1>
      <h1 className="text-5xl m-20 text-red-400 transition-all duration-500 translate-x-0">hareem</h1>
    </>
  );
}

export default App;
