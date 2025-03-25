fufunction setPreferences() {
            let fontSize = getCookie("fontsize") || "16px";
            let fontColor = getCookie("fontcolor") || "#000000";
            document.documentElement.style.setProperty('--fontsize', fontSize);
            document.documentElement.style.setProperty('--fontcolor', fontColor);
            document.getElementById("fontsize").value = parseInt(fontSize);
            document.getElementById("fontcolor").value = fontColor;
        }
        
        document.getElementById("preferencesForm").addEventListener("submit", function(event) {
            event.preventDefault();
            let fontSize = document.getElementById("fontsize").value + "px";
            let fontColor = document.getElementById("fontcolor").value;
            document.documentElement.style.setProperty('--fontsize', fontSize);
            document.documentElement.style.setProperty('--fontcolor', fontColor);
            document.cookie = `fontsize=${fontSize}; path=/; max-age=31536000`;
            document.cookie = `fontcolor=${fontColor}; path=/; max-age=31536000`;
        });

        function getCookie(name) {
            let cookies = document.cookie.split('; ');
            for (let cookie of cookies) {
                let [key, value] = cookie.split('=');
                if (key === name) return value;
            }
            return null;
        }

        function getFormvalue(event) {
            event.preventDefault();
            let fname = document.getElementById("fname").value.trim();
            let lname = document.getElementById("lname").value.trim();
            if (fname && lname) {
                alert(`${fname} ${lname}`);
            } else {
                alert("Please enter both first and last name.");
            }
        }

        document.getElementById("nameForm").addEventListener("submit", getFormvalue);
        window.onload = setPreferences;