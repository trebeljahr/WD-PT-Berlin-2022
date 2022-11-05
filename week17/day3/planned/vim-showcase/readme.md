:wq for closing. 

G jumps to the end. 

Vim has different modes.

i for insert. 
v for visual. 

ESC – get's you back out of a mode into "normal" mode. 

What you see here is actually not VIM. It's neovim, which is a bit more modern and has lots of plugins. 

It can be a complete IDE. 

Let's wrangle some text.

While in Normal Mode – pressing h,j,k,l moves the cursor around.

zt puts current line on top of cursor.
zz is in the middle.
zb puts it at the bottom.

o makes a new line and puts you into insert mode.

e jumps to the end of the word. 

c deletes a selection and places the cursor.
r replaces with some letter

/ searches for something
? works the same.

n gives next search result

how to stop highlighting
:noh

"hello there my friend"

a gives you a cursor, but *after* the character. it appends!
A appends at the end of the line.

F and f are for jumping to and from characters!
T and t work the same but place the cursor on the preceding character!

Movement + Actions can be combined. 

Dots repeat an action. 

You can use numbers to repeat movements (or actions!)
I.e. jumping 10 lines down is 10j

Inserting is an action. So is yanking, deleting, pasting.

yy yanks a whole line (copies). 

While in normal mode you can paste with p what you yanked.

dd deletes a whole line.
and also yanks it (I have that changed in the config, so it just deletes)

u undoes stuff.

ctrl + r redoes it.

c is for changing a letter. c can be combined with movement. like "ciw" which means to change an "inner" word

0 jumps to the beginning of the line.
$ to the end.

[ some text in brackets select it with "vi[" which means v – visual, i – inner, [ brackets! ]
( also works here "vi(" )

lastly: 
macros!
which is absolutely nuts...
q for recording. then name of register. then your command, then q again. 

an example: 

let's transform this:
"OCP Master Node 1",ocpmaster01,192.168.0.20,ocpmaster01.home.ca
"OCP Master Node 2",ocpmaster02,192.168.0.21,ocpmaster02.home.ca
"OCP Master Node 3",ocpmaster03,192.168.0.22,ocpmaster03.home.ca
"OCP Worker Node 1",ocpnode01,192.168.0.30,ocpnode01.home.ca
"OCP Worker Node 2",ocpnode02,192.168.0.31,ocpnode02.home.ca
"OCP Worker Node 3",ocpnode03,192.168.0.32,ocpnode03.home.ca
"Ansible Host 1",ansibleh01,192.168.0.144,ansibleh01.home.ca
"Ansible Host 2",ansibleh02,192.168.0.145,ansibleh02.home.ca

into this: 
192.168.0.21	ocpmaster02.home.ca	ocpmaster02	#OCP Master Node 2
192.168.0.21	ocpmaster02.home.ca	ocpmaster02	#OCP Master Node 2
192.168.0.22	ocpmaster03.home.ca	ocpmaster03	#OCP Master Node 3
192.168.0.30	ocpnode01.home.ca	ocpnode01	#OCP Worker Node 1
192.168.0.31	ocpnode02.home.ca	ocpnode02	#OCP Worker Node 2
192.168.0.32	ocpnode03.home.ca	ocpnode03	#OCP Worker Node 3
192.168.0.144	ansibleh01.home.ca	ansibleh01	#Ansible Host 1
192.168.0.145	ansibleh02.home.ca	ansibleh02	#Ansible Host 2

Then try this out. What does it read? 
qh 0 r# f"x ldf, A,<ESC>p 0df, $px :s/,/\t/g<enter> jq

practice time
first let's copy paste example from above.

To replay the macro @h –> because h is the register we used.
Number + @@ replays last used buffer number of times!

gg jumps to the top.
