const Breadcrumb = ({ router }) => {
  const title = router.path.split("/")[1].replace("-", " ") || "Getting Started";

  return <p class="text-sm font-medium capitalize text-primary-500 mb-0">{title}</p>;
};

export default Breadcrumb;
