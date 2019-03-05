const EditorView = require('prosemirror-view').EditorView;
const EditorState = require('prosemirror-state').EditorState;
const Schema = require('prosemirror-model').Schema;

const schema = new Schema({
    nodes: {
        doc: { content: 'text*' },
        text: { inline: true }
    }
});
const state = EditorState.create({ schema: schema });

const container = document.getElementById('container');
const view = new EditorView(container, { state: state });

