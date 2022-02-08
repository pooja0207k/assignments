var fs=require('fs');
var request=require('request');
async function download(url,filename,callback){
    request.head(url,function(err,res,body){
        console.log(`${filename} is adding to images folder`);
        request(url).pipe(fs.createWriteStream(filename)).on('close',callback);
    });
    };
const dataimages=[{name:'img1',imgurl:'https://doodleart.redbull.com/assets/managed/entries/processed/sm/367010617181759_36211000.jpg'},
{name:'img2',imgurl:'https://www.justcolor.net/wp-content/uploads/sites/1/nggallery/doodle-art-doodling/coloring-page-adults-doodle-art-rachel.jpg'},
{name:'img3',imgurl:'https://i.pinimg.com/originals/e5/55/a3/e555a39ca5457a079a9bcce59f61f8d5.jpg'},
{name:'img4',imgurl:'https://i.pinimg.com/originals/ef/4c/91/ef4c91fb73e61e19211a0589187ccaa6.jpg'},
{name:'img5',imgurl:'https://static.vecteezy.com/system/resources/previews/000/107/464/non_2x/huge-doodle-vector-pack.jpg'},
{name:'img6',imgurl:'https://i.ytimg.com/vi/O5u1apUkYV0/maxresdefault.jpg'},
{name:'img7',imgurl:'https://media.glassdoor.com/l/e9/c1/7a/84/independence-day-celebration.jpg'}]
dataimages.forEach(ele=>{
    const name=ele.name;
    download(ele.imgurl,`./images/${name}.png`,function(){
        console.log(`done-${ele.name}`);
    });
});