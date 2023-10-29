export const dashboardPage = async (req, res) => {
  return res.json({
    status_code: 200,
    result: "success",
    message: "this is the dashboard page",
  });
};
