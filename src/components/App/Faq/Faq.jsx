import React from "react";
import TitleComponent from "../TitleComponent";
import BlueBtn from "../BlueBtn";
import QuestionComponent from "../QuestionComponent";
import "./responsiveFaq.css";

function Faq() {
  return (
    <div className="Faq-section">
      <TitleComponent
        title={"Frequently Asked Questions"}
        introPara={`Here are some of our FAQs.
          If you have any other questions you’d like 
            answered please feel free to email us.`}
      />
      <div className="q-box">
        <QuestionComponent
          question={`What is Bookmark?`}
          ans={`  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt 
justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.
`}
        />
        <QuestionComponent
          question={`How can I request a new browser?`}
          ans={` Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. 
Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, 
ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. 
Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.
`}
        />
        <QuestionComponent
          ans={`  Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum 
urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed 
sollicitudin ex et ultricies bibendum.
`}
          question={`Is there a mobile app?`}
        />
        <QuestionComponent
          ans={` Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam 
vitae neque eget nisl gravida pellentesque non ut velit.
`}
          question={`What about other Chromium browsers?`}
        />
      </div>
      <BlueBtn BtnValue={"More info"} />
    </div>
  );
}

export default Faq;
