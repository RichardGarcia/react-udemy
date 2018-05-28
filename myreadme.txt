28 May 2018

  - components???

  https://cdnjs.cloudflare.com/ajax/libs/react/15.6.1/react.min.js 
  https://cdnjs.cloudflare.com/ajax/libs/react/15.6.1/react-dom.min.js 

  https://codepen.io/

  Section 1.5
  /* first react code - check codepen */
  https://codepen.io/richardgarcia/pen/ZRzELO?editors=1010

  Section 1.9 Course Outline
  1. Getting Started
  2. The Basics
  3. Debugging
  4. Styling components
  5. Components, Deep dive
  6. HTTP Request
  7. Routing
  8. Forms & Validation
  9. Redux
  10. Authentication
  11. Testing, Introduction
  12. Deployment
  13. Bonus - Animations, Next Steps, Webpack

  Useful Resources & Links
    https://reactjs.org/
    Codepen demo code: https://codepen.io/anon/pen/MELQaQ

    Next-Gen JS -- use jsbin.com
      1. let & const
      2. Arrow function

        /* old */
        function printMyName(name) {
          console.log(name);
        }
        printMyName('Buddy Zabala');

        /* arrow ver 01 */
        let printMyName = (name) => {
          console.log(name);
        }
        printMyName('Buddy Zabala');

        /* arrow ver 02 */
        /* remove parentesis - one argument only */
        let printMyName = name => {
          console.log(name);
        }
        printMyName('Buddy Zabala');

        /* arrow ver 03 */
        let printMyName = name => console.log(name);

        printMyName('Buddy Zabala');

        /* arrow ver 04 */
        let printMyName = () => {
          console.log('Buddy Zabala');
        }
        printMyName();


        /* arrow ver 04 */
        /* more than 1 argument */
        let printMyNameAndAge = (name, age) => {
          console.log(name, age);
        }
        printMyNameAndAge(Buddy Zabala', '27');

        /* arrow ver 1a */
        const multiply = (number) => {
          return (number * 2);
        }

        console.log(multiply(3));

        /* arrow ver 1a - shorter */
        const multiply = number => (number * 2);

        console.log(multiply(3));

      3. Exports and Imports
          research more!!!

      More NEXT-GEN JS -- https://www.udemy.com/react-the-complete-guide-incl-redux/learn/v4/t/lecture/8199180?start=0
