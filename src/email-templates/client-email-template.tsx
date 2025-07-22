import { Html, Head, Section, Text, Row } from '@react-email/components';

interface Props {
  name: string;
  email: string;
  message: string;
}

export default function ClientMessageEmailTemplate({ name, email, message }: Props) {
  return (
    <Html>
      <Head>
        <title>New Contact Form Message</title>
      </Head>
      <Section style={{ backgroundColor: '#f5f6fa', padding: '32px 0' }}>
        <Row style={{
          maxWidth: '500px',
          margin: 'auto',
          backgroundColor: '#fff',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,.04)',
          padding: '28px 24px',
        }}>
          <Text style={{ fontSize: '18px', marginBottom: '12px', fontWeight: 'bold' }}>
            📬 New Contact Form Submission
          </Text>
          <Text>
            You’ve received a new message from your portfolio contact form:
          </Text>
          <Text style={{ margin: '12px 0 0' }}>
            <strong>Name:</strong> {name}<br />
            <strong>Email:</strong> {email}
          </Text>
          <Text style={{ margin: '16px 0 4px', fontWeight: 'bold' }}>
            Message:
          </Text>
          <Text
            style={{
              background: '#f1f3f4',
              padding: '13px 14px',
              borderRadius: '5px',
              fontStyle: 'italic',
              whiteSpace: 'pre-line',
            }}
          >
            {message}
          </Text>
          <Text style={{ marginTop: '24px', fontSize: '12px', color: '#70757a' }}>
            — MsgGenie Portfolio Notifier
          </Text>
        </Row>
      </Section>
    </Html>
  );
}
