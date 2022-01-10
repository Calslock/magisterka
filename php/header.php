<div id="header">
    <table class="tg" id="header-container">
        <thead>
        <tr>
            <td class="tg-f8tv" id="header-logo" rowspan="4">
                <img id="logo" src="../img/logo.png" alt="Logo">
            </td>
            <td class="tg-0lax" id="header-search-buttons">
                <label for="searchbar"></label><input type="text" id="searchbar">
                <button id="font-change" onclick="changefont()"><img src="../img/font-change.png" alt="Change font"></button>
                <button id="font-small" onclick="changesize(-1)"><img src="../img/font-small.png" alt="Decrease font size"></button>
                <button id="font-big" onclick="changesize(1)"><img src="../img/font-big.png" alt="Increase font size"></button>
                <button id="night-mode" onclick="darkmode()"><img src="../img/night-mode.png" alt="Enable night mode"></button>
                <button id="contrast" onclick="highcontrast()"><img src="../img/contrast.png" alt="High contrast mode"></button>
            </td>
        </tr>
        <tr>
            <td class="tg-0lax" id="header-date">
                <?php echo date("d.m.Y H:i"); ?>
            </td>
        </tr>
        <tr>
            <td class="tg-0lax" id="header-login">
                <a href="#">Login</a>
            </td>
        </tr>
        <tr>
            <td class="tg-0lax" id="header-news-bar">
                Entries placeholder
            </td>
        </tr>
        </thead>
    </table>
</div>
