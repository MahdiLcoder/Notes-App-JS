	import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";

const addBtn = document.querySelector('#add');
addBtn.addEventListener('click', addNewNote);

function addNewNote(){
  const note = document.createElement('div');
  note.classList.add('note');
	const text = '';
  note.innerHTML = `
    <div class="tools">
      <button class="edit">
        edit
      </button>
      <button class="delete">
        delete
      </button>
    </div>
    <div class="main ${text ? "" :"hidden"}"></div>
    <textarea class="${text ? "hidden" :""}"></textarea>
  `
	const editBtn = note.querySelector('.edit');
	const deleteBtn = note.querySelector('.delete');
	const main = note.querySelector('.main');
	const textarea = note.querySelector('textarea');

  textarea.value = text;
	main.innerHTML = marked(text);
	deleteBtn.addEventListener('click', () => {
		note.remove();
	});
	editBtn.addEventListener('click', () => {
    main.classList.toggle('hidden');
    textarea.classList.toggle('hidden');
  });
	textarea.addEventListener('input', (e) => {
		const value = e.target.value;
		main.innerHTML = marked(value);
	});
	
	document.body.appendChild(note);
}