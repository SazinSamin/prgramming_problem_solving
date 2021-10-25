var heading = document.querySelector('h1');
var box = document.querySelector('div');

box.addEventListener('mouseover', function(){
        heading.innerHTML = "The mouse inside the box";
})

box.addEventListener('mouseout', function(){
        heading.innerHTML = "The mouse outside the box";
})

heading.addEventListener('mouseover', function(){
        heading.innerHTML = "MouseOver test, scroll you mouse to the box";
})




/*<!-- helper html -->
<!DOCTYPE html>
<html lang="en">
<head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>

        <style>
                div{
                        width: 100px;
                        height: 100px;
                        background-color: blue;
                }
        </style>

</head>
<body>
        <h1>MouseOver test, scroll you mouse to the box</h1>
        <div></div>
        
        <script src="test1.js"></script>
</body>
</html>*/
