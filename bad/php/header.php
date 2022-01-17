<div id="header">
    <table class="tg" id="header-container">
        <thead>
        <tr>
            <td class="tg-f8tv" id="header-logo" rowspan="4">
                <a href="/bad/"><img id="logo" src="/img/logo.png"></a>
            </td>
            <td class="tg-0lax" id="header-search-buttons">
                <label for="searchbar"></label><input type="text" id="searchbar">
                <button id="font-change" onclick="changefont()"><img src="/img/font-change.png"></button>
                <button id="font-small" onclick="changesize(-1)"><img src="/img/font-small.png"></button>
                <button id="font-big" onclick="changesize(1)"><img src="/img/font-big.png"></button>
                <button id="night-mode" onclick="darkmode()"><img src="/img/night-mode.png"></button>
                <button id="contrast" onclick="highcontrast()"><img src="/img/contrast.png"></button>
                <input type="button" onclick="location.href='/';" value="good" />
            </td>
        </tr>
        <tr>
            <td class="tg-0lax" id="header-date">
                <?php echo date("d.m.Y H:i"); ?>
                <input type="button" onclick="location.href='https://docs.google.com/forms/d/e/1FAIpQLSeu9r9swGo4REWKUiBBC-ExW5Pqd5EHHfGeIMJ0qNgTkdm4iA/viewform';" value="Ankieta" />
            </td>
        </tr>
        <tr>
            <td class="tg-0lax" id="header-login">
                <script>
                    let user = sessionStorage.getItem("logged-in");
                    let headerContainer = document.getElementById("header-login");
                    if (user == null){
                        headerContainer.innerHTML =
                            "<a href='/bad/login.php''>Login</a> | <a href='/bad/contact.php'>Contact</a>"
                    }
                    else{
                        headerContainer.innerHTML =
                            "Hello, "+ user + " | <a href='/bad/account_edit.php'>Edit account</a> | <a href='#' onclick='logout()'>Logout</a> | <a href='/bad/contact.php'>Contact</a>"
                    }
                </script>

            </td>
        </tr>
        <tr>
            <td class="tg-0lax" id="header-news-bar">
                <div id="news-bar">
                    <marquee direction="left" scrollamount="10" behavior="scroll" onmouseover="this.stop()" onmouseout="this.start()">
                        <a href="/bad/article1.php">Omi-gone? Cases are now falling...</a>
                        <span> --- </span>
                        <a href="/bad/article2.php">Yahoo workers in Japan are told...</a>
                        <span> --- </span>
                        <a href="/bad/article3.php">Anti-vax father, 45, who ignored...</a>
                        <span> --- </span>
                        <a href="/bad/article4.php">Twin pandas born at Tokyo zoo...</a>
                    </marquee>
                </div>
            </td>
        </tr>
        </thead>
    </table>
    <script>
        window.onload = function(){
            if (localStorage.getItem("@dark-mode") === "true") darkmode();
            if (localStorage.getItem("@alt-font") === "true") changefont();
            if (localStorage.getItem("@high-contrast") === "true") highcontrast();
            let fontSize = parseInt(localStorage.getItem("@font-size"));
            if (fontSize > 0 || fontSize < 0) changesize(fontSize);
        }
    </script>
</div>
