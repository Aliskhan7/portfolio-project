const baseUrl =
  "https://api.telegram.org/bot7541911241:AAFW3rQPlvzxByLzApwFFJn8YGR8UsUwqDg/";

const sendMessage = async (message: string): Promise<void> => {
  const url = `${baseUrl}sendMessage?chat_id=-1002291965069&text=${message}`;

  const response = await fetch(url);

  console.log(response);
};
