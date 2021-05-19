`use strict`

$(function () {
    // Portfolio Buttons

    //event to display different imgs
    $(`.button`).on("click", function () {
        $buttonId = $(this).attr('id');
        //if all fade in all buttons
        if ($buttonId == "all") {
            $(`.work-container`).find("div").css("display", "none");
            $(`.work-container`).find("div").fadeIn(550);
        } else {  //else hide all & then fade in those with $buttonType as id
            $(`.work-container`).find("div").css("display", "none");
            $(`.work-container`).find(`.${$buttonId}`).fadeIn(550);
        }
    });

    //event to change background for active button
    $(`.button`).on(`click`, function () {
        if ($(this).hasClass(`active`)) { // if this button is already active do nothing
        } else {
            $(`.button`).removeClass(`active`) // remove the active class from all the buttons
            $(this).addClass(`active`); // add the active class to the button you clicked
        }
    });



    // Landing Nav-link Underline

    //event to add underline on mouseover
    $(`#landing-nav-links a.nav-link`).on('mouseover', function () {
        $(this).addClass(`active`);
    });

    //event to take underline away on mouseleave
    $(`#landing-nav-links a.nav-link`).on('mouseleave', function () {
        if ($(this).hasClass(`home`)) { //if it's the home nav-link don't remove
        } else if ($(this).hasClass(`active`)) { //else if its active remove the active class
            $(this).removeClass(`active`);
        }
    });



    //Navbar Nav-Link Underline

    //event to make link active when clicked on
    $(`#navbar-nav-links a.nav-link`).on(`click`, function () {
        $(`#navbar-nav-links a.nav-link`).removeClass('active');
        $(this).addClass(`active`);
    });

    //event to make links active when you scroll to them
    document.addEventListener(`scroll`, function(){
        let navbar = document.getElementById(`navbar`).getBoundingClientRect();
        let skills = document.getElementById(`skills`).getBoundingClientRect();
        let resume = document.getElementById(`resume`).getBoundingClientRect();
        let portfolio = document.getElementById(`portfolio`).getBoundingClientRect();
        let contact = document.getElementById(`contact`).getBoundingClientRect();

        if(skills.top <= navbar.bottom && resume.top > navbar.bottom){
            $(`#navbar-nav-links a.skills`).addClass(`active`);
        }else{
            if($(`#navbar-nav-links a.skills`).hasClass(`active`)){
                $(`#navbar-nav-links a.skills`).removeClass(`active`);
            }
        }

        if(resume.top <= navbar.bottom && portfolio.top > navbar.bottom){
            $(`#navbar-nav-links a.resume`).addClass(`active`);
        }else{
            if($(`#navbar-nav-links a.resume`).hasClass(`active`)){
                $(`#navbar-nav-links a.resume`).removeClass(`active`);
            }
        }

        if(portfolio.top <= navbar.bottom && contact.top > 745){
            $(`#navbar-nav-links a.portfolio`).addClass(`active`);
        }else{
            if($(`#navbar-nav-links a.portfolio`).hasClass(`active`)){
                $(`#navbar-nav-links a.portfolio`).removeClass(`active`);
            }
        }

        if(contact.top <= 745){
            $(`#navbar-nav-links a.contact`).addClass(`active`);
        }else{
            if($(`#navbar-nav-links a.contact`).hasClass(`active`)){
                $(`#navbar-nav-links a.contact`).removeClass(`active`);
            }
        }
    })
})