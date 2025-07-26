
        document.addEventListener("keydown", (e) => {
            if (e.key == "Enter") {
                myFunction();
                document.getElementById("input").value = "";
            }
        })
        function myFunction() {
            let input = Number(document.getElementById('input').value);
            let fab = [0, 1]
            let result = '';
            let series
            for (let i = 2; i <= input; i++) {
                fab[i] = fab[i - 1] + fab[i - 2]
                series += fab[i];
            
            }
            result = fab;
            document.getElementById('output').style.display = "flex";
            document.getElementById('output').innerHTML = result;
        }   
    