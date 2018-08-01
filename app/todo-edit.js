import React from 'react';

class TodoEdit extends React.Component {
  modal = React.createRef();
  title = React.createRef();
  date = React.createRef();

  componentDidMount() {
    $(this.modal.current).modal();
    $(this.modal.current).on('hidden.bs.modal', () => {
      this.props.onClose();
    });
  }

  componentWillUnmount() {
    $(this.modal.current).modal('hide');
  }

  render() {
    const {title, date, onSave, onClose} = this.props;
    return (
      <div
        className="modal"
        tabIndex="-1"
        role="dialog"
        ref={this.modal}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Редактирование</h5>
              <button
                className="close"
                type="button"
                aria-label="Close"
                onClick={onClose}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <input
                className="new-title"
                name="title"
                defaultValue={title}
                ref={this.title}
              />
              <input
                className="new-date"
                name="date"
                defaultValue={date}
                ref={this.date}
              />
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-primary save-changes"
                type="button"
                onClick={() => {
                  onSave({
                    title: this.title.current.value,
                    date: this.date.current.value
                  })}}
              >
                Save changes
              </button>
              <button
                className="btn btn-secondary"
                type="button"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoEdit;
