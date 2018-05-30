import {
    CommandRegistry
} from '@phosphor/commands';

import {
    Message
} from '@phosphor/messaging';


import{
    BoxPanel, CommandPalette, DockPanel, Menu, MenuBar, Widget
} from '@phosphor/widgets';

// import css from './style/index.css';
import '../style/index.css';
const commands = new CommandRegistry();


function createMenu() : Menu
{
    let sub1 = new Menu({commands});
    sub1.title.label = 'More...';
    sub1.title.mnemonic = 0;
    sub1.addItem({command: 'example:one'});

    let root = new Menu({ commands });
    root.addItem({ command: 'example:copy' });
    root.addItem({ command: 'example:copy' });
    root.addItem({ command: 'example:cut' });
    root.addItem({ command: 'example:paste' });
    root.addItem({ type: 'separator' });
    root.addItem({ command: 'example:new-tab' });
    root.addItem({ command: 'example:close-tab' });
    root.addItem({ command: 'example:save-on-exit' });
    root.addItem({ type: 'submenu', submenu: sub1});

    return root;

}

function main():void
{
    let menu1 = createMenu();
    menu1.title.label = 'File';
    menu1.title.mnemonic = 1;

    let menu2 = createMenu();
    menu2.title.label = 'Edit';
    menu2.title.mnemonic = 0;

    let bar = new MenuBar();

    bar.addMenu(menu1);
    bar.addMenu(menu2);
    bar.id = 'menuBar';

    //  BoxPanel.setStretch(dock, 1);
 
    let mainWindow = new BoxPanel({ direction: 'left-to-right', spacing: 0 });
    mainWindow.id = 'main';
    mainWindow.addWidget(bar);
 
    window.onresize = () => { mainWindow.update(); };

    Widget.attach(mainWindow, document.body);

}

console.log('main?'); 
window.onload = main;



// function hello(compiler: string) {
//     console.log('Hello from %s ', compiler);
//     }
// hello("TypeScript haha  shi ");

