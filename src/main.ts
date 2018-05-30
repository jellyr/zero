import {
    CommandRegistry
} from '@phosphor/commands';

import {
    Message
} from '@phosphor/messaging';


import{
    BoxPanel, CommandPalette, DockPanel, Menu, MenuBar, Widget
} from '@phosphor/widgets';



const commands = new CommandRegistry();


function createMenu() : Menu
{
    let sub1 = new Menu({commands});
    sub1.title.label = 'More...';
    sub1.title.mnemonic = 0;
    sub1.addItem({command: 'example:one'});

    return sub1;

}

function main():void
{
    let menu1 = createMenu();
    menu1.title.label = 'File';
    menu1.title.mnemonic = 0;

    let bar = new MenuBar();
    bar.addMenu(menu1);

    //  BoxPanel.setStretch(dock, 1);
 
    let main = new BoxPanel({ direction: 'left-to-right', spacing: 0 });
    main.id = 'main';
    main.addWidget(bar);
 
    window.onresize = () => { main.update(); };

    Widget.attach(main, document.body);

}

console.log('main?'); 
window.onload = main;



// function hello(compiler: string) {
//     console.log('Hello from %s ', compiler);
//     }
// hello("TypeScript haha  shi ");

