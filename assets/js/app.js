const tabs = document.querySelector('.forms');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = tabs.querySelectorAll('[role="tabpanel"]');

function tabClickHandler(ev) {
    // Hiding All Panels 
    tabPanels.forEach(panel => {
        panel.hidden = true;
    });

    // Unselecting Buttons 
    tabButtons.forEach(tab => {
        tab.setAttribute('aria-selected', false);
    });

    //Selecting Buttons
    ev.currentTarget.setAttribute('aria-selected', true);
    const id = ev.currentTarget.id; //Getting Selected Id

    //Showing Selected Panels
    const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
    console.log(tabPanel);
    tabPanel.hidden = false;

}

//Listening Events
tabButtons.forEach(button => { button.addEventListener('click', tabClickHandler) });