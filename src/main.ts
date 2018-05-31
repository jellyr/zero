import {
    CommandRegistry
} from '@phosphor/commands';

import {
    Message
} from '@phosphor/messaging';

import{
    BoxPanel, CommandPalette, DockPanel, Menu, MenuBar, Widget
} from '@phosphor/widgets';

import '../style/index.css';
const commands = new CommandRegistry();



function createFileMenu() : Menu
{
    let fileMenu = new Menu({ commands });
    fileMenu.addItem({ command: 'menuFile:MenuCopy' });


 
    let fileSub = new Menu({commands});
    fileSub.title.label = 'menuFileSub(一些子菜單)';
    fileSub.title.mnemonic = 0;
    fileSub.addItem({command: 'menuFileSub:menuSubTest1'});
    fileSub.addItem({command: 'menuFileSub:menuSubTest2'}); 




    fileMenu.addItem({ type: 'submenu', submenu: fileSub});

    fileMenu.title.label = 'File';
    fileMenu.title.mnemonic = 0;
    return fileMenu;
}

function main():void
{
   commands.addCommand('menuFile:MenuCopy', {
    label: 'Copy File(拷貝文件)',
    mnemonic: 0,
    icon: 'fa fa-copy',
    execute: () => {
      console.log('Copy');
    }
  });

  commands.addCommand('menuFileSub:menuSubTest1', {
    label: 'file sub 1 (子菜單1)',
    execute: () => {
      console.log('menuSubTest1');
    }
  });

  commands.addCommand('menuFileSub:menuSubTest2', {
    label: 'file sub 2(子菜單2)',
    execute: () => {
      console.log('One');
    }
  });



  commands.addKeyBinding({
    keys: ['Accel C'],
    selector: 'body',
    command: 'menuFile:MenuCopy'
  });

 

    let menuBar = new MenuBar();    menuBar.id = 'menuBar';     menuBar.addMenu(createFileMenu());
    
 


    let r1 = new ContentWidget('Red');
    let b1 = new ContentWidget('Blue');
    let g1 = new ContentWidget('Green');
    let y1 = new ContentWidget('Yellow');



    let dock = new DockPanel();
    dock.addWidget(r1);
    dock.addWidget(b1, { mode: 'split-right', ref: r1 });
    dock.addWidget(y1, { mode: 'split-bottom', ref: b1 });
    dock.id = 'dock'; 

    BoxPanel.setStretch(dock, 1);
    let mainWindow = new BoxPanel({ direction: 'left-to-right', spacing: 0 }); 
    mainWindow.id = 'main'; // important!!! why this set to main, then the content window all full size!!!
    mainWindow.addWidget(dock);

    let ctxt = createFileMenu();
    document.addEventListener('contextmenu', (event: MouseEvent) => {
        event.preventDefault();
        ctxt.open(event.clientX, event.clientY);
        console.log('ctxt menu');
      });


      document.addEventListener('keydown', (event: KeyboardEvent) => {
        commands.processKeydownEvent(event);
      });

    window.onresize = () => { mainWindow.update(); };
    Widget.attach(menuBar, document.body);
    Widget.attach(mainWindow, document.body);
}



window.onload = main;
class ContentWidget extends Widget {

    static createNode(): HTMLElement {
      let node = document.createElement('div');
      let content = document.createElement('div');
      let input = document.createElement('input');
      input.placeholder = 'input something??';
      content.appendChild(input);
      node.appendChild(content);
      return node;
    }
  
    constructor(name: string) {
      super({ node: ContentWidget.createNode() });
      this.setFlag(Widget.Flag.DisallowLayout);
      this.addClass('content');
      this.addClass(name.toLowerCase());
      this.title.label = name;
      this.title.closable = true;
      this.title.caption = `這是一個: ${name}`;
    }
  
    get inputNode(): HTMLInputElement {
      return this.node.getElementsByTagName('input')[0] as HTMLInputElement;
    }
  
    protected onActivateRequest(msg: Message): void {
      if (this.isAttached) {
        this.inputNode.focus();
      }
    }
  }
    /*
    commands.addCommand('example:copy', {
        label: 'Copy File',
        mnemonic: 0,
        icon: 'fa fa-copy',
        execute: () => {
          console.log('Copy');
        }
      });

      commands.addCommand('example:one', {
        label: 'One',
        execute: () => {
          console.log('One');
        }
      });


    let menu1 = createMenu();
    menu1.title.label = 'File';
    menu1.title.mnemonic = 0;

    let menu2 = createMenu();
    menu2.title.label = 'Edit';
    menu2.title.mnemonic = 0;

    let bar = new MenuBar();

    bar.addMenu(menu1);
    bar.addMenu(menu2);
    */
   // let ctxt = createMenu();
    // document.addEventListener('contextmenu', (event: MouseEvent) => {
    //     event.preventDefault();
    //     ctxt.open(event.clientX, event.clientY);
    //     console.log('ctxt menu');
    //   });







// function hello(compiler: string) {
//     console.log('Hello from %s ', compiler);
//     }
// hello("TypeScript haha  shi ");

/*
function createMenu() : Menu
{
    // let sub1 = new Menu({commands});
    // sub1.title.label = 'sub menu';
    // sub1.title.mnemonic = 0;
    // sub1.addItem({command: 'example:one'});

    // let sub2 = new Menu({commands});
    // sub2.title.label = '22';
    // sub2.title.mnemonic = 0;
    // sub2.addItem({command: 'example:one'});
    let root = new Menu({ commands });
  
    root.addItem({ command: 'example:copy' });
    // root.addItem({ command: 'example:cut' });
    // root.addItem({ command: 'example:paste' });


    root.addItem({ type: 'submenu', submenu: sub1});
    // root.addItem({ type: 'submenu', submenu: sub2});
    return root;

}
*/
