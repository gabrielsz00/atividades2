noseX=0;
noseY=0;
posx = 250;
posy = 302;
img= 'https://i.postimg.cc/4yv7ZTj2/aaaaaasdadad.png'


function preload() {
  clownNose = loadImage(img);
document.getElementById("cima").value = posy
}

function setup() {
  canvas = createCanvas(500, 500);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(500, 500);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet foi inicializado');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x-posx;
    noseY = results[0].pose.nose.y-posy;
  }
}

function draw() {
  image(video, 0, 0, 500, 500);
  image(clownNose, noseX, noseY, 430, 430);
}

function takeSnapshot(){    
  save('myFilterImage.png');
}

function coco(){
  img='https://i.postimg.cc/hP412Ckb/baixados-removebg-preview.png'
  selecionado = "Cocô"
  preload()
  atualizar()
}


function oculos(){
  img='https://i.postimg.cc/Njds101k/smiling-face-with-sunglasses-1f60e.png'
  selecionado = "Óculos"
  preload()
  atualizar()
}

function feliz(){
  img='https://i.postimg.cc/132ThhPZ/8148ca973c5958c0fd6d58c133b9a5c5.png'
  selecionado = "Feliz"
  preload()
  atualizar()
}

function gabriel(){
  img='https://i.postimg.cc/43d7pVtP/mascara-Personalizado-1.png'
  selecionado = "Gabriel"
  preload()
  atualizar()
}

function atualizar(){
  document.getElementById("kaka").innerHTML = "Selecionado:"+ selecionado;
}

function mudarposis(){
posy = document.getElementById("cima").value
document.getElementById("cima").innerHTML = value
}

function preloa() {
  let inputImagem = document.getElementById('imagem');
  let arquivoImagem = inputImagem.files[0];
  let urlImagem = URL.createObjectURL(arquivoImagem);
  clownNose = loadImage(urlImagem);
}