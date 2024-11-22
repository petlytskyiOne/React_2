import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

export const Title = styled.h1`
  text-align: center;
  color: #d6dce4;
`;

export const PostList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const PostItem = styled.li`
  background-color: #333f4f;
  border-radius: 8px;
  padding: 15px;
  margin: 15px 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

export const PostTitle = styled.h2`
  color: #d6dce4;
`;

export const PostContent = styled.p`
  color: #d6dce4;
`;

export const Button = styled.button`
  background-color: #ff4d4f;
  border: none;
  color: white;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d9363e;
  }
`;

export const NewPostForm = styled.form`
  background-color: #333f4f;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 30px;
`;

export const FormTitle = styled.h2`
  text-align: center;
  color: #d6dce4;
`;

export const InputGroup = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  color: #555;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
