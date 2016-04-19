// tutorial1.js
var CommentBox = React.createClass({
	render: function () {
		return (
            <div className="commentBox">
                <h1>COmments</h1>
                <CommentList />
                <commentForm />
            </div>
        );
	}
});

ReactDOM.render(
    <CommentBox />,
    document.getElementById('content');
);

// tutorial2.js
var CommentList = React.createClass({
    render: function () {
        return (
            <div className="commentList">
                Hello, world! I'm a comment list!
            </div>  
        );
    }
});

var CommentForm = React.createClass({
    render: function () {
        return (
            <div className="commentForm">
                Hello, world! I'm a comment form!
            </div>  
        );
    }
});

