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
		MyImage.src = "Win.jpg";
		
		}

function RangersPic(MyImage){
	MyImage.src = "Rangers.jpg";
}
function CelticPic(MyImage){
	MyImage.src = "Celtics.webp"
}
function Original(MyImage){
	MyImage.src = "FC.jpg";
}

function Originals(MyImage){
	MyImage.src = "c.jpg";
}
function Winner(MyImage){
	MyImage.src = "Winner.jpg";
}
