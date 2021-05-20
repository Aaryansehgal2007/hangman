class Start{
     constructor(){
          // for the start button
          this.startButton = createButton("Start Game");
          this.startButton.position(displayWidth/2-15,displayHeight/2);
          this.startButton.size(100,50);
          this.startButton.style("background","lightgrey");

          this.name = createInput("                    Type Your Name Here");
          this.name.position(displayWidth/2-120,displayHeight/2-100);
          this.name.size(300,50);

          this.story = createButton('STORY');
          this.story.position(100,50);

          this.storyT = createElement("h2");
          this.storyT1 = createElement("h2");
          this.storyT2 = createElement("h2");
          this.storyT3 = createElement("h2");

          this.storyT.style("background","white")
          this.storyT1.style("background","white")
          this.storyT2.style("background","white")
          this.storyT3.style("background","white")

          }

          hide(){
               this.storyT.hide();
               this.storyT1.hide();
               this.storyT2.hide();
               this.storyT3.hide();
          }
     

     display(){
          this.story.mousePressed(() => {
               this.storyT.html("You are hanged by a crazy person.")
               this.storyT1.html("If you want to live you have give him the correct word to his riddles.")
               this.storyT2.html("Or you will die.")
               this.storyT3.html("But dont worry you can play again by refreshing the page.")
               this.storyT.position(40,50);
               this.storyT1.position(40,76);
               this.storyT2.position(40,103);
               this.storyT3.position(40,129);
          });
     }
}