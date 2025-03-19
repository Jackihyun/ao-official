import { useEffect, useState } from "react";
import { ScrollRestoration, useLocation, useNavigate } from "react-router-dom";

interface Application {
  aWord: string;
  id: string;
  name: string;
  phoneNum: string;
  submitedAt: Date;
}

const index = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [applications, setApplications] = useState<Application[]>([]);

  useEffect(() => {
    fetch("/api/applications", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(location.state),
    })
      .then((res) => {
        if (res.status !== 200) navigate("/admin/sign-in");
        return res.json();
      })
      .then((data: Application[]) => {
        console.log(data);
        const apps = data.map((application) => {
          return {
            ...application,
            submitedAt: new Date(application.submitedAt),
          };
        });

        setApplications(
          apps.sort((a, b) => {
            return b.submitedAt.getTime() - a.submitedAt.getTime();
          })
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <ScrollRestoration />
      <div className="mb-[200px] w-screen overflow-x-auto">
        <table className="mx-auto table-auto text-black dark:text-white/90 text-center bg-black/10 dark:bg-white/10 rounded-2xl shadow-lg mt-10 max-w-[1000px] w-fit">
          <thead>
            <tr>
              <th>이름</th>
              <th>학번</th>
              <th>전화번호</th>
              <th>한 마디</th>
              <th>지원 날짜</th>
            </tr>
          </thead>
          <tbody className="bg-white/50 dark:bg-black/50 divide-y divide-gray-200 w-full">
            {applications &&
              applications.map((application) => {
                return (
                  <tr key={application.id} className="w-full">
                    <td className="px-6 py-4 w-full">
                      <p className="text-pretty w-[90px]">{application.name}</p>
                    </td>
                    <td className="px-6 py-4 w-full">
                      <p className="text-pretty w-[90px]">{application.id}</p>
                    </td>
                    <td className="px-6 py-4 w-full">
                      <p className="text-pretty w-[140px]">
                        {application.phoneNum}
                      </p>
                    </td>
                    <td className="px-6 py-4 w-full">
                      <p className="text-left text-pretty w-[500px]">
                        {application.aWord}
                      </p>
                    </td>
                    <td className="px-6 py-4 w-full">
                      <p className="text-pretty w-[190px]">
                        {application.submitedAt.toLocaleString()}
                      </p>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default index;
