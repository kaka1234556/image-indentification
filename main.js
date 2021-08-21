function preload()
{


}


function setup()
{
canvas=createCanvas(650,300);
canvas.center();
video=createCapture(VIDEO);
video.hide();
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/_Ah6R24TBX/model.json',model_loaded);
}




function draw()
{
    image(video,0,0,650,300);
    classifier.classify(video,gotResult);
    

}

function model_loaded()
{
console.log("Model is loaded ");

}

function gotResult(error,results)
{
if(error)
{
console.error(error);
}
else
{
console.log(results);
document.getElementById("result_family_member__name").innerHTML=results[0].label;
document.getElementById("result_family_member_accuracy").innerHTML=results[0].confidence.toFixed(3);

}


}

