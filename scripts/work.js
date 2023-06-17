function tabSwitch(tabName) {
    let panes = document.getElementsByClassName('tabPane')
    for (pane of panes) {
        pane.classList.remove('activePane')
        tab = document.getElementById(pane.id+'Tab')
        tab.classList.remove('activeTab')
        
    }
    let activePane = document.getElementById(tabName)
    activePane.classList.add('activePane')
    let activeTab = document.getElementById(activePane.id+'Tab')
    activeTab.classList.add('activeTab')
}


function panelSwitch(panelName) {
    let panel = document.getElementById(panelName)
    console.log(panel)
    if (Array.from(panel.classList).includes('expandedContent')) {
        panel.classList.remove('expandedContent')
    } else {
        panel.classList.add('expandedContent')
    }
}