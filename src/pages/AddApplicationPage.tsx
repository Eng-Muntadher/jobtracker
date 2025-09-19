import AddApplicationPageHeader from "../components/AddApplicationPageHeader";
import QuickTips from "../components/QuickTips";
import AddApplicationForm from "../components/AddApplicationForm";

function AddApplicationPage() {
  return (
    <div className="container px-4 mx-auto">
      <AddApplicationPageHeader />
      <AddApplicationForm />
      <QuickTips />
    </div>
  );
}

export default AddApplicationPage;
