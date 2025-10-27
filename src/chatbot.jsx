import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import styles from "/src/Chatbox.module.css";
import { FaMicrophone } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import WhatsappIcon from "./WhatsappIcon";

function Chatbox() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Welcome! I am a Support ChatBot for BOULOU.IO",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
    {
      from: "bot",
      text: "How can I assist you today?",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const recognitionRef = useRef(null);
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // Helper to detect URLs in bot messages and render clickable links
  function renderMessageText(text) {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(urlRegex);

    return parts.map((part, idx) => {
      if (urlRegex.test(part)) {
        return (
          <a
            key={idx}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "blue", textDecoration: "underline" }}
          >
            {part}
          </a>
        );
      } else {
        return part;
      }
    });
  }

  const handleSend = async () => {
    const now = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    if (!input.trim()) return;
    const userMsg = {
      from: "user",
      text: input,
      timestamp: now,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const sessionId = localStorage.getItem("session_id");

      const response = await axios.post("https://api.boulou.io/api/chat", {
        message: input,
        session_id: sessionId || null,
      });

      // Save new session_id if backend created it
      if (response.data.session_id && !sessionId) {
        localStorage.setItem("session_id", response.data.session_id);
      }

      setTimeout(() => {
        const botReply = {
          from: "bot",
          text: response.data.response || "No reply from Boulou AI.",
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        };
        setMessages((prev) => [...prev, botReply]);
        setLoading(false);
      }, 3000);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: "Oops! Something went wrong. Try again later.",
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
      setLoading(false);
      console.error("Chat error:", error);
    }
  };


  const handleNewChat = () => {
    localStorage.removeItem("session_id");

    setMessages([
      {
        from: "bot",
        text: "Welcome! I am a Support ChatBot for BOULOU.IO",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      },
      {
        from: "bot",
        text: "How can I assist you today?",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      },
    ]);
    setInput("");
  };


  const handleVoiceInput = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Speech recognition is not supported in this browser.");
      return;
    }

    if (!recognitionRef.current) {
      const SpeechRecognition = window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.lang = "en-US";
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInput(transcript);
        setIsListening(false);
      };

      recognition.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognition;
    }

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      recognitionRef.current.start();
      setIsListening(true);
    }
  };

  return (
    <>
    
      <button className={styles.fab} onClick={() => setOpen(!open)}>
        <span className={`${styles.icon} ${open ? styles.open : styles.close}`}>
          {open ? "x" : "💬"}
        </span>
      </button>

      {open && (
        <div className={styles.chatbox}>
          <div className={styles.header}>
            BOULOU.IO
            <button className={styles.newChatBtn} onClick={handleNewChat}>
              🆕 New Chat
            </button>
          </div>
          <div className={styles.messages}>
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`${styles.message} ${msg.from === "user" ? styles.user : styles.bot}`}
              >
                <div>{msg.from === "bot" ? renderMessageText(msg.text) : msg.text}</div>
                <div className={styles.timestamp}>{msg.timestamp}</div>
              </div>
            ))}
            {loading && (
              <div className={`${styles.message} ${styles.bot}`}>
                <div className={styles.typing}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className={styles.inputArea}>
            <input
              type="text"
              placeholder="Type your message or use mic..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className={styles.inputBox}
            />
            <span onClick={handleVoiceInput} className={styles.iconMic}>
              <FaMicrophone size={20} />
            </span>
            <button className={styles.sendButton} onClick={handleSend}>
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Chatbox;