export const VisibilityControl = ({setShowCompleted, cleanTask, isChecked, haveItems}) => {

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete it?")) {
      cleanTask()
    }
  }

  return (
    <div className="d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary">

      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" onChange={ (e) => setShowCompleted(e.target.checked) } checked={isChecked} />
        <label>Show tasks done</label>
      </div>

      { isChecked && (
        <button className="btn btn-danger btn-sm" onClick={handleDelete} disabled={!haveItems}>Clear</button>
      )}
    </div>
  )
}