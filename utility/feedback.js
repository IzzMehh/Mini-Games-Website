class feedback {
  constructor() {
    this.showFeedBackBtn = document.querySelector("#feedback-btn");
    this.mobileFeedBackBtn = document.querySelector('#mobile-feedback-btn')
    this.feedbackDialog = document.querySelector(".feedback-dialog");
    this.sumbitFeedBack = document.querySelector(".submit-feedback");
    this.feedbackText = document.querySelector(".feedback-input");
    this.stars = document.querySelectorAll(".stars");
    this.dataToSend = {
      content: {
        rating: 0,
        message: "",
      },
    };
  }

  starHovered(rating) {
    this.stars.forEach((element) => {
      const starValue = parseInt(element.getAttribute("data-value"));
      if (starValue <= rating) {
        element.setAttribute("name", "star");
      } else {
        element.setAttribute("name", "star-outline");
      }
      this.dataToSend.content.rating = rating;
    });
  }

  FeedBackEvents() {
    this.showFeedBackBtn.addEventListener("click", ()=>this.feedbackDialog.showModal());

    this.mobileFeedBackBtn.addEventListener('click',()=>this.feedbackDialog.showModal())

    this.stars.forEach((element) => {
      element.addEventListener("mouseover", () => {
        let rating = parseInt(element.getAttribute("data-value"));
        this.starHovered(rating);
      });
    });

    this.sumbitFeedBack.addEventListener("click", () => {
      let data = {
        content: `@everyone \n Rating: ${this.dataToSend.content.rating} Stars \n FeedBack Message: ${this.dataToSend.content.message}`,
      };
      this.sendFeedback(data);
    });

    this.feedbackText.addEventListener("input", (value) => {
      let inputVal = value.target.value.replace(/[^A-Za-z\s\!]+/g, "");
      value.target.value = inputVal;
      this.dataToSend.content.message = inputVal;
    });
  }

  sendFeedback(rating) {
    fetch(
      "https://discord.com/api/webhooks/1241699321989038093/awyKCv73ZrdARzId9VVsYdNlWAq_KQwwpsu5R3Px4IilMpOdVVxNVAOw9Q_oO65k7VWK",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(rating),
      }
    );
  }
}

export const feedbackClass = new feedback();
