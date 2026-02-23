import { Link } from "react-router";
import {
  CheckIcon,
  Code2Icon,
  SparklesIcon,
  UsersIcon,
  VideoIcon,
  ZapIcon,
} from "lucide-react";
import { SignInButton } from "@clerk/clerk-react";
import { ArrowRightIcon } from "lucide-react";

function HomePage() {
  return (
    <div className="bg-gradient-to-br from-base-100 via-base-200 to-base-300">
      <nav className="bg-base-100/80 backdrop-blur-md border-b border-primary/20 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto p-4 flex items-center justify-between">
          <Link
            to={"/"}
            className="flex items-center gap-3 hover:scale-105 transition-transform duration-200"
          >
            <div className="size-10 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center shadow-lg">
              <SparklesIcon className="size-6 text-white" />
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-black text-xl bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent font-mono tracking-wider">
                HireCode
              </span>
              <span className="text-xs text-base-content/60 font-medium -mt-0.5">
                Code in Sync
              </span>
            </div>
          </Link>

          <SignInButton mode="modal">
            <button className="group px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-xl text-white font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 flex items-center gap-2">
              <span>Start Now</span>
              <ArrowRightIcon className="size-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </SignInButton>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="badge badge-primary badge-lg">
              <ZapIcon className="size-4" />
              Live Collaboration
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Build Together,
              </span>
              <br />
              <span className="text-base-content">Grow Together</span>
            </h1>
            <p className="text-xl text-base-content/70 leading-relaxed max-w-xl">
              A powerful platform built for interactive coding interviews and
              real-time collaborations. Connect, solve, and perform with
              confidence.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="badge badge-lg badge-outline">
                <CheckIcon className="size-4 text-success" />
                Live Interview Session
              </div>
              <div className="badge badge-lg badge-outline">
                <CheckIcon className="size-4 text-success" />
                Code Editor
              </div>
              <div className="badge badge-lg badge-outline">
                <CheckIcon className="size-4 text-success" />
                Language Flexibility
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <SignInButton mode="modal">
                <button className="btn btn-primary btn-lg">
                  Start Coding
                  <ArrowRightIcon className="size-5 " />
                </button>
              </SignInButton>
              <button className="btn btn-outline btn-lg">
                <VideoIcon className="size-5" />
                View Demo
              </button>
            </div>

            <div className="stats stats-vertical lg:stats-horizontal bg-base-100 shadow-lg ">
              <div className="stat">
                <div className="stat-value text-primary">20K+</div>
                <div className="stat-title">Active Users</div>
              </div>
              <div className="stat">
                <div className="stat-value text-secondary">50K+</div>
                <div className="stat-title">Sessions</div>
              </div>
              <div className="stat">
                <div className="stat-value text-accent">98%</div>
                <div className="stat-title">Uptime</div>
              </div>
            </div>
          </div>

          <img
            src="/hero.png"
            alt="HireCode Platform"
            className="w-full h-auto rounded-3xl shadow-2xl border-4 border-base-100 hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Everything You Need to{" "}
            <span className="text-primary font-mono">Win</span>
          </h2>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Advanced features crafted to simplify coding interviews, enhance
            collaboration, and maximize productivity in real time.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
              <div className="size-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                <VideoIcon className="size-8 text-primary" />
              </div>
              <h3 className="card-title">Video Call</h3>
              <p className="text-base-content/70">
                Clear video and crisp audio for smooth and effective interviews
              </p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
              <div className="size-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                <Code2Icon className="size-8 text-primary" />
              </div>
              <h3 className="card-title">Live Code Editor</h3>
              <p className="text-base-content/70">
                Real-time collaboration with smart syntax highlighting and
                support for multiple languages.
              </p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
              <div className="size-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                <UsersIcon className="size-8 text-primary" />
              </div>
              <h3 className="card-title">Easy Collaborations</h3>
              <p className="text-base-content/70">
                Present your ideas, solve problems together, and learn live.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
