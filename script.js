function vidToShow(buttonNo) {
  var vid;
  if (buttonNo == 0) {
    vid = "https://www.youtube.com/embed/B940urEhNXw"
  } else if(buttonNo ==1){
    vid = "https://www.youtube.com/embed/58fECJ0FBUA"
  } else {
    vid = "https://www.youtube.com/embed/Lcx-gDgdkU4"
  }
  document.getElementById('vidYT').src = vid;
}

function showAll(){
  var hiddenText = document.getElementsByClassName("hidden");
  for (var index=0; index < hiddenText.length; index++) {
    hiddenText[index].style.display = "inline";
  }
}

function hideAll(){
  var visibleText = document.getElementsByClassName("hidden");
  for (var index=0; index < visibleText.length; index++) {
    visibleText[index].style.display = "none";
  }
}
function revealP(){
	document.getElementById("Block").style.display = 'block';
	
}
function hide(){
    document.getElementById("Block").style.display = "none";
}	

function MouseClick(MyImage)
		{
		MyImage.src = "images/Win.jpg";
		
		}

function RangersPic(MyImage){
	MyImage.src = "images/Rangers.jpg";
}
function CelticPic(MyImage){
	MyImage.src = "images/Celtics.webp"
}
function Original(MyImage){
	MyImage.src = "images/FC.jpg";
}

function Originals(MyImage){
	MyImage.src = "images/c.jpg";
}
function Winner(MyImage){
	MyImage.src = "images/Winner.jpg";
}
function mystery(MyImage)
		{
		MyImage.src = "images/mystery.jpg";
		}

function regan(MyImage){
	MyImage.src = "images/regan.jpg";
}
